import Link from "next/link";

const AboutPage = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold text-blue-500 my-4">About Page with SSR</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor adipisci voluptatem, est aperiam facere architecto iure. Recusandae consequatur facilis suscipit!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ipsa nihil vel sapiente itaque saepe!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi suscipit totam dicta delectus optio dolorum laborum? Dolorum hic non error delectus iste doloremque recusandae enim perferendis, deleniti quam! Minima, corporis.</p>
            <div>
                <Link href="/" className="hover:underline">Go back home</Link>
            </div>
        </div>
    )
}

export default AboutPage;