import jwt from 'jsonwebtoken';

/**
 * @interface StudentAuth Representa o formato do objeto do aluno autenticado
 * @property `id`: identificador único do registro do aluno
 * @property `name`: o nome do aluno
 * @property `email`: email do aluno
 * @property `type`: o tipo de aluno. Conterá o valor `"T"` (tech helper), `"M"` (matriculado) ou `"F"` (formado)
 *
 * @example Exemplo de objeto do aluno autenticado
 *
 * ```ts
 * {
 *    id: "1",
 *    name: "João da Silva",
 *    email: "joao@growdev.com",
 *    type: "T"
 * }
 * ```
 *
 * @author @MarceleCardozo @leticialealperez
 * @since 27/08/2024
 * @see Documentação - Para mais informações acesse {@link https://jwt.io}
 */
export interface StudentAuth {
  id: string;
  name: string;
  email: string;
  type: 'M' | 'T' | 'F';
}

/**
 * @class JWT - é uma adaptação (adapter) da biblioteca JsonWebToken ({@link https://jwt.io}) para a API Academy
 *
 */
export class JWT {
  /**
   * Criar um token no formato JWT a partir de dados do aluno que foi autenticado
   * @param data um objeto no formato StudentAuth
   * @see {@link StudentAuth} para verificar o formato do objeto esperado
   * @returns token no formato JWT criado a partir dos dados do aluno
   *
   * @author Leticia Leal @leticialealperez
   */
  public generateToken(data: StudentAuth): string {
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT secret not defined in .env');
    }

    const token = jwt.sign(data, process.env.JWT_SECRET, {
      algorithm: 'HS256',
      expiresIn: process.env.JWT_EXPIRES_IN || '1h',
    });

    return token;
  }

  /**
   * Fazer a leitura do crachá e retornar os dados do usuário
   *
   */
  public decodedToken(token: string): StudentAuth | null {
    try {
      if (!process.env.JWT_SECRET) {
        throw new Error('JWT secret not defined in .env');
      }

      /**
       * retorno do jwt
       */
      const data = jwt.verify(token, process.env.JWT_SECRET) as StudentAuth;

      return data;
    } catch (error) {
      return null;
    }
  }
}
