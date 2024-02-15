import ApiService from "./ApiService";

export const getAllDrinks = async () => {
    try {
        const response = await ApiService.get("/drinks/get");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

