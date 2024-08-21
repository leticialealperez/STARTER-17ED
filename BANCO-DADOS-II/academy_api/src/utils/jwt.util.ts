import jwt from 'jsonwebtoken';

interface StudentAuth {
  id: string;
  name: string;
  email: string;
}

export class JWT {
  // Criar um crachá a partir de dados do usuário
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

  // Fazer a leitura do crachá e retornar os dados do usuário
  public decodedToken(token: string): StudentAuth | null {
    try {
      if (!process.env.JWT_SECRET) {
        throw new Error('JWT secret not defined in .env');
      }

      const data = jwt.verify(token, process.env.JWT_SECRET) as StudentAuth;

      return data;
    } catch (error) {
      return null;
    }
  }
}
