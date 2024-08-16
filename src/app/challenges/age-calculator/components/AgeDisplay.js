const AgeDisplay = ({ year, month, day }) => {
  return (
    <div className="italic font-extrabold text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[6vw] leading-none lg:leading-[90px]">
      <p className="flex gap-2 md:gap-4">
        <span className="text-ageCalc-purple">{year}</span>
        <span className="text-ageCalc-off-black ">years</span>
      </p>
      <p className="flex gap-2 md:gap-4">
        <span className="text-ageCalc-purple">{month}</span>
        <span className="text-ageCalc-off-black ">months</span>
      </p>
      <p className="flex gap-2 md:gap-4">
        <span className="text-ageCalc-purple">{day}</span>
        <span className="text-ageCalc-off-black ">days</span>
      </p>
    </div>
  )
}

export default AgeDisplay
