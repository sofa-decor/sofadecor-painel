
class OrderService {
    // private phone = "5551995909864";
    private phone = "555197224452";
    private wpp_base_url = "https://wa.me/";
    private simple_message = "Olá! Visitei o site e gostaria de mais informações.";

    getSenderWppLink(name?: string, email?: string) {
        let message: string | null = null;
        if (name && email) message = this.customMessage(name, email);
        else message = encodeURIComponent(this.simple_message);
        const wppUrl = `${this.wpp_base_url}${this.phone}?text=${message}`;
        return wppUrl;
    }

    private customMessage(name: string, email: string) {
        return encodeURIComponent(`
Olá!
Visitei o site da SofaDecor e gostaria de transformar meu ambiente!
            
*Name: ${name}*.
*E-mail: ${email}*.
        `);
    }
}

export default new OrderService();
