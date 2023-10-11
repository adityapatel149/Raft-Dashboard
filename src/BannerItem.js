export default function BannerItem({ title, price, prev, pill }) {
  return (
    <div className="flex items-center gap-5">
      <img
        src="/images/piggy.jpg"
        alt=""
        className="w-16 h-16 rounded-[4rem]"
      />
      <div className="flex flex-col items-start gap-4">
        <p className="text-white text-lg not-italic font-normal leading-[normal] opacity-50">
          {title}
        </p>
        <div className="flex flex-col items-start gap-1.5">
          <div className="flex justify-center items-center gap-2 text-white text-2xl not-italic font-medium leading-[normal]">
            ${price}
            <div className="flex justify-center items-center gap-2 bg-white px-[0.5rem] py-[0.25rem] rounded-[2.25rem]">
              <p className="m-0 text-[#6E62E5] text-[1rem] not-italic font-medium leading-[normal]">
                {pill}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[0.25rem]">
            <p className="text-white text-lg opacity-60 not-italic font-normal leading-[normal] ">
              Previous month
            </p>
            <p className="text-white text-lg opacity-100"> ${prev}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
