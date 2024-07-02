import Image from "next/image";

const RatingCard = () => {
    return (
        <div>
        <Image
          src="/interactive-rating-component/icon-star.svg"
          alt="star-svg"
          width={40}
          height={40}
        ></Image>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <button>Submit</button>
      </div>

    );
}

export default RatingCard;