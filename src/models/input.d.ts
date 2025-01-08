type RegisterInput = {
    email: string,
    password: string,
    name?: string
}

type ChangePasswordInput = {
    email: string,
    password: string,
    confirmPassword: string
    code: string
}