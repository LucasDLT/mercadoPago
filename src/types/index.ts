//por el momento dejamos este tipado luego vemos si con el nuevo metodo a emplear sigue igual
export interface MercadoPagoItem {
  id: string;
  title: string;
  description?: string;
  picture_url?: string;
  category_id?: string;
  quantity: number;
  currency_id?: string;
  unit_price: number;
}
