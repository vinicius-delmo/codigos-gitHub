import requester from "../services/api";

export async function getProductsList() {
  const response = await requester("http://localhost:3030/products");
  return response.data;
}
