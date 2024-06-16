export class Company {
    id: number;
    name: string;
    email: string;
    website: string;
    logo_path: string;

    constructor(id: number, name: string, email: string, website: string, logo_path: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.website = website;
        this.logo_path = logo_path;
    }
}
