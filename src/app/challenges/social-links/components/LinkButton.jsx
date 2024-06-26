import Link from "next/link"

const LinkButton = ({ name }) => {
  return (
    <Link
      href="#"
      className=" block bg-sc-Grey w-[310px] p-4 text-center text-[0.9rem] font-white rounded-xl font-bold hover:bg-sc-Green hover:text-sc-OffBlack"
    >
      {name}
    </Link>
  )
}

export default LinkButton
