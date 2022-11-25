import Layout from "../components/Layout"

import formimage from '../assets/images/formimage.svg';
import { Form } from "../components/contactComponents/Form";

export const Contact = () => {
    return (
        <Layout>
            <div className="w-8/12 h-full px-11 boximage-contact-mobile flex justify-center items-center">
                <img src={formimage} alt="" />
            </div>
            
            <div className="w-4/12 h-full flex items-center box-form-mobile">
                <Form/>
            </div>
        </Layout>
    )
}

export default Contact