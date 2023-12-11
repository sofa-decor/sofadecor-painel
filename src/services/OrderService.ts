import { Product } from "../models/product";

class OrderService {
    private phone = "5551995909864";
    private wpp_base_url = "https://wa.me/";
    private simple_message =
        "Olá! Visitei seu site e gostaria de mais informações.";

    getSenderWppLink(product?: Product, link?: string) {
        let message: string | null = null;
        if (product && link) message = this.orderProductMessage(product, link);
        else message = encodeURIComponent(this.simple_message);
        const wppUrl = `${this.wpp_base_url}${this.phone}?text=${message}`;
        return wppUrl;
    }

    private orderProductMessage(product: Product, link: string) {
        return encodeURIComponent(`
Olá!
Visitei o site e gostaria de adquirir o produto
            
*${product.name}*.

*Link site*: ${link}
        `);
    }
}

export default new OrderService();
