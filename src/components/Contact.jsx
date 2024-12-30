
export default function Contact() {
  return (
    <div className="pb-8">
      <h2 className="text-center text-4xl font-semibold pb-8">Reach me at</h2>
      <div className="flex justify-evenly">
      <div className="">
        <h5 className="text-2xl font-semibold mb-4">Email</h5>
        <a className="hover:underline underline hover:text-red-800" href="mailto:ravinderh17@gmail.com">ravinderh17@gmail.com</a>
      </div>
      <div className="">
        <h5 className=" text-2xl font-semibold mb-4">Linkedin</h5>
        <a className="underline hover:text-red-800" href="https://www.linkedin.com/in/ravinder-kaur001/"
        target="_blank" >in/ravinder-kaur</a>
      </div>
      </div>
    </div>
  )
}
