import React from 'react';
import ReactDOM from "react-dom";
// import Pdf from "react-to-pdf";
import { FaDownload, FaLongArrowAltRight } from 'react-icons/fa';
const ref = React.createRef();

const Blog = () => {

    return (
        <div className='px-20 my-10'>
            {/* <Pdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => <button onClick={toPdf}><FaDownload className=' text-orange-500 text-2xl mb-5'></FaDownload></button>}
            </Pdf> */}


            <div ref={ref}>

            <div className="container mx-auto mt-8">
        <h1 class="text-3xl font-semibold mb-4">Welcome to Our Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <!-- Blog Post 1 --> */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                {/* <img src="https://via.placeholder.com/400x250" alt="Blog Post 1" class="w-full h-40 object-cover"> */}
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">Delicious Cuisine</h2>
                    <p className="text-gray-700">Explore our mouthwatering dishes, carefully prepared by our chefs. </p>
                    <a href="#" class="text-blue-600 hover:underline">Read More</a>
                </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                {/* <img src="https://via.placeholder.com/400x250" alt="Blog Post 2" class="w-full h-40 object-cover"> */}
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">Chef's Specials</h2>
                    <p className="text-gray-700">Discover the chef's signature dishes that will tantalize your taste buds.</p>
                    <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
            </div>
            {/* <!-- Blog Post 3 --> */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                {/* <img src="https://via.placeholder.com/400x250" alt="Blog Post 3" className="w-full h-40 object-cover"> */}
                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-2">Dining Experience</h2>
                    <p className="text-gray-700">Learn about our elegant ambiance and top-notch service.</p>
                    <a href="#" className="text-blue-600 hover:underline">Read More</a>
                </div>
            </div>
        </div>
    </div>
                {/* <h2 className='text-xl font-bold'> 1. Tell us the differences between uncontrolled and controlled components. </h2>
                <p className='mb-5 mt-2'><FaLongArrowAltRight />
                Controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.A controlled functional component is a component that receives its current value and update callback via props.
                </p>

                <h2 className='text-xl font-bold'> 2. How to validate React props using PropTypes? </h2>
                <p className='mb-5 mt-2'><FaLongArrowAltRight />
                propTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning. After we specify validation patterns, we will set App. defaultProps.
                </p>

                <h2 className='text-xl font-bold'> 3. Tell us the difference between nodejs and express js. </h2>
                <p className='mb-5 mt-2'><FaLongArrowAltRight />
                The main difference between Node.js and Express.js is that Node.js is a runtime environment, while Express.js is a web application framework built on top of Node.js. Node.js provides the foundation for building server-side applications using JavaScript, while Express.js provides a set of tools and features that make it easier to build web applications on top of Node.js.
                </p>

                <h2 className='text-xl  font-bold'> 4. What is a custom hook, and why will you create a custom hook? </h2>
                <p className='mb-5 mt-2'><FaLongArrowAltRight />
                A custom hook is a function that allows you to reuse logic across multiple components. It's a way to extract reusable logic from a component so that it can be shared between multiple components.Custom hooks are created to solve the problem of code duplication. If you find yourself writing the same code repeatedly in different components, it may be a good idea to create a custom hook that encapsulates that logic.
                </p> */}
            </div>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Blog />, rootElement);

export default Blog;