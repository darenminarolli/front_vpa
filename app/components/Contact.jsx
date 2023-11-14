import { FaPhoneAlt } from 'react-icons/fa';
const Contact = () => {
    return (
        <>
            <div>
                <hgroup className='flex gap-x-3'>
                    <FaPhoneAlt />
                    <h1 className='underline'> Kontakt</h1>
                </hgroup><br />
                <div className=''>
                    <div className="card p-3 w-full  ">
                        <a className="login">Ploteso</a>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
                            <div className="inputBox">
                                <input type="text" required="required" />
                                <span className="user">Emri</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" required="required" />
                                <span>Mbiemri</span>
                            </div>
                            <div className="inputBox">
                                <input type="email" required="required" />
                                <span>E-mail</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" required="required" />
                                <span>Tel</span>
                            </div>
                        </div>
                        <button className="enter">Dergo</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;