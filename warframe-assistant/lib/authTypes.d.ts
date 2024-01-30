export type User = {
  email: string
  password: string
}

export type UserValidationResult = {
  success: boolean
  emailOK: boolean
  passwordOK: boolean
  message: string
}
