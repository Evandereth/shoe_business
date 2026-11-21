import { Link } from 'react-router-dom'

export default function Hero({ image = '' }) {
  return (
    <section className="bg-fog">
      <div className="container-x grid items-center gap-8 py-10 md:grid-cols-2 md:gap-10 md:py-16">
        <div>
          <h1 className="text-[40px] font-bold leading-[1.05] tracking-tighter md:text-6xl">
            Handcrafted shoes, made for your foot.
          </h1>
          <p className="mb-7 mt-4 max-w-md text-mute md:text-[17px]">
            Premium leather shoes made in Lagos. Buy a pair that's ready now, or order yours
            made to size in about a week.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/shop" className="btn">Shop new arrivals</Link>
            <Link to="/size-guide" className="btn btn-outline">Find your size</Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-md bg-stone">
          {image ? (
            <img src={image} alt="Handcrafted Stilebyb shoes" className="aspect-[4/3] w-full object-cover md:aspect-square" />
          ) : (
            <div className="aspect-[4/3] md:aspect-square" />
          )}
        </div>
      </div>
    </section>
  )
}