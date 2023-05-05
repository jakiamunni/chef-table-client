import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import { FaDownload, FaLongArrowAltRight } from 'react-icons/fa';
const ref = React.createRef();

const Blog = () => {

    return (
        <div className='px-20 my-10'>
            <Pdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => <button onClick={toPdf}><FaDownload className=' text-orange-500 text-2xl mb-5'></FaDownload></button>}
            </Pdf>


            <div ref={ref}>
                <h2 className='text-xl font-bold'> 1. Tell us the differences between uncontrolled and controlled components. </h2>
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
                </p>
            </div>
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Blog />, rootElement);

export default Blog;