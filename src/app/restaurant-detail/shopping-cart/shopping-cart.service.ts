import { CartItem } from './cart-item.model';
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";

export class ShoppingCartService {

    items: CartItem[] = [];

    clear() {
        this.items = [];
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((itemDoMenu) => itemDoMenu.menuItem.id === item.id)
        if (foundItem) {
            // se o item já existe, acrescenta um na quantidade
            this.increaseQuantity(foundItem);
        } else {
            this.items.push(new CartItem(item));
        }
    }

    removeItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    total(): number {
        // troca a array de itens do carrinho por uma array com os valores e dps soma a quantidade dos valores, começando por 0
        return this.items
        .map(item => item.value())
        .reduce( (valorAnterior, valorAtual) => valorAnterior+valorAtual, 0);
    }

    increaseQuantity(item: CartItem) {
        item.quantity += 1;
    }

    decreaseQuantity(item: CartItem) {
        item.quantity -= 1;
        if(item.quantity === 0) {
            this.removeItem(item);
        }
    }

}