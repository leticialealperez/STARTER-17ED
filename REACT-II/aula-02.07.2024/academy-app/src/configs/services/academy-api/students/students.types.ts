export interface SignUpRequestBody {
  name: string;
  document: string;
  age: number;
  email: string;
  password: string;
}

export interface Student {
  id: string;
  name: string;
  documentIdentification: string;
  emailAddress: string;
  age: number;
  authToken: string | null;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

// na utilização das propriedades de data retornadas pela API, deve se considerar o parse (conversão)
// const data =  "2024-07-04T22:32:45.216Z";
// new Date(data).getFullYear();