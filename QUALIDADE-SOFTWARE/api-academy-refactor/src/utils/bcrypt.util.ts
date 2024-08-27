import bcrypt from 'bcrypt';

export class Bcrypt {
  // Embaralhar um texto da senha
  public async generateHash(password: string): Promise<string> {
    if (!process.env.BCRYPT_SALT) {
      throw new Error('Bcrypt salt not defined in .env');
    }

    if (isNaN(Number(process.env.BCRYPT_SALT))) {
      throw new Error('Bcrypt salt is not a number');
    }

    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_SALT));
    return hash;
  }

  // Verificar se um determinado texto dá match com uma determinada hash
  public async verify(hash: string, password: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, hash);

    return isMatch;
  }
}
