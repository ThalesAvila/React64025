import ShoppingCartImage from "../assets/img/shopping-carts.png";
import Button from "./Button";
import Icon from "./Icon";
import { FaCartShopping, FaArrowRight } from "react-icons/fa6";

export default function EmptyState() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-neutral-900">
      <div className="flex justify-center items-center flex-col gap-5 min-h-[400px] md:min-h-max">
        <Icon>
          <FaCartShopping />
        </Icon>
        <header>
          <h2 className="font-medium text-xl text-center text-neutral-900">
            Your cart is empty
          </h2>
          <span className="font-normal text-base text-center text-neutral-900">
            Let's go explore some products
          </span>
        </header>
        <Button>
          Explore products
          <FaArrowRight />
        </Button>
      </div>
      <img src={ShoppingCartImage} alt="Shopping Carts Image" />
    </div>
  );
}
