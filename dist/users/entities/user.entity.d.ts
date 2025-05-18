export declare class User {
    id: number;
    lastName: string;
    firstName: string;
    address: string;
    zipCode: string;
    city: string;
    phoneNumber: string;
    email: string;
    birthDate: Date;
    password: string;
    hashPassword(): Promise<void>;
    passwordConfirmation?: string;
}
