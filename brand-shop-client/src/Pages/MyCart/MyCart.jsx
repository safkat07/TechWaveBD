import  { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ShowAddedCart from "../ShowAddedCart/ShowAddedCart";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [newCart, setNewCart] = useState([]);
  // console.log(user.email);

  fetch(" https://brand-shop-server-bd.vercel.app/cart")
    .then((res) => res.json())
    .then((data) => {
      const filterCart = data.filter(
        (singleCart) => singleCart.UserEmail == user.email
      );
      setNewCart(filterCart);
    });
 
  

  return (
    <div>
      <div>
        <div>
          {newCart.length == 0 ? (
            <div>
              <p className="text-5xl font-bold mt-36 font-sans text-center ">
                SORRY!!
              </p>
              <p className="text-5xl font-bold  font-sans text-center ">
                No Product Added!!
              </p>
            </div>
          ) : (
            <div className="grid gap-3 md:ml-14 md:gap-5 justify-center grid-cols-1 md:grid-cols-3 ">
              {newCart?.map((newCartProduct) => (
                <ShowAddedCart
                  newCartProduct={newCartProduct}
                  key={newCartProduct.id}
                ></ShowAddedCart>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCart;
