import { addCart, NewCartData } from "../Data/DataCart";
import { UsersData } from "../Data/UserData";


export const GetCardAPI = async () => {
  const id_user = parseInt(UsersData[0].id);

  try {
    const response = await fetch(
      "https://63aa9d20fdc006ba6046fffd.mockapi.io/Storyfinal",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const cartDataArray = data.filter((cart) => cart.id_user === id_user);
    if (cartDataArray) {
      NewCartData.length = 0;
      addCart(cartDataArray);
      console.log("NewCartData123666: ", NewCartData);
    }
  } catch (error) {
    console.error("Lỗi:", error);
  }
};
