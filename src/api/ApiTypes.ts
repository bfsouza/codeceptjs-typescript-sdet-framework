export interface ServerestUser {
  nome: string;
  email: string;
  password: string;
  administrador: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
