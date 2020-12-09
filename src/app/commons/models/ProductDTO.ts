import { CategoryProductDTO } from './CategoryProductDTO';
import { PymeProfileDTO } from './PymeProfileDTO';
import { SubProductCategoryDTO } from './SubProductCategoryDTO';

export class ProductDTO {

    // tslint:disable-next-line: variable-name
    product_Id: number;
    PymeUserProfileEntity: PymeProfileDTO;
    CategoryProductEntity: CategoryProductDTO;
    productName: string;
    productDescription: string;
    productImgUrl: string;
    productSearchUrl: string;
    productUnitPrice: number;
    productOffer: number;
    productDateCreated: Date;
    productLastUpdate: Date;

    // galeryUrl: string;
    // videoUrl: string;
    // stock: number;
    // description: string;
    // specifications: string;
    // // tslint:disable-next-line: variable-name
    // delivery_time: string;
    // shipping: string;
    // feedback: string;
    // reviews: string;
    // pymeName: string;


}