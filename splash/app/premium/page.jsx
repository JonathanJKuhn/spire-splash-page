'use client'
import { useState } from 'react'

const premium = () => {
    const [showInfo, setShowInfo] = useState(false)
    const [showTerms, setShowTerms] = useState(false)
    const [showPrivacy, setShowPrivacy] = useState(false)

    const toggleShow = (e) => {
        e.preventDefault()
        if (e.target.value === "info") {
            setShowInfo(!showInfo)
        } else if (e.target.id === "terms") {
            setShowTerms(!showTerms)
        } else if (e.target.id === "privacy") {
            setShowPrivacy(!showPrivacy)
        }
        console.log(e.target.id)
    }

    return (
      <section className="w-full">
        <div className="grid place-content-center mt-24 mb-10">
            <div className="flex flex-col bg-gray/80 md:w-4/5 w-5/6 mx-auto">
                <div className="flex justify-between">
                    <img src="/images/SPIRE-logo-square.svg" className="flex-0" alt="Spire Logo" />
                    <div className="flex-2 p-4 mt-10 mx-auto">
                        <h1 className="text-3xl font-bold text-center">Welcome to Spire</h1>
                        <h2 className="text-xl font-bold text-center mt-7 mx-auto w-40">Premium Guest Wi-Fi Service</h2>
                    </div>
                </div>
                <div className="mx-auto mt-5 w-5/6">
                    <p className="font-medium text-center break-normal">To connect to our premium Wi-Fi, please fill out the information below</p>
                    <form action="#">
                        <div className="grid grid-cols-1 gap-6 my-5 mx-5">
                            <label className="block">
                                <span className="text-gray-700">First Name</span>
                                <input type="text" className="
                                    mt-0
                                    block
                                    w-full
                                    px-0.5
                                    pt-0.5
                                    border-0 border-b-2 border-gray-200
                                    bg-transparent
                                    focus:border-black focus:ring-0
                                " />
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Last Name</span>
                                <input type="text" className="
                                    mt-0
                                    block
                                    w-full
                                    px-0.5
                                    pt-0.5
                                    border-0 border-b-2 border-gray-200
                                    bg-transparent
                                    focus:border-black focus:ring-0
                                " />
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Email Address</span>
                                <input type="email" className="
                                    mt-0
                                    block
                                    w-full
                                    px-0.5
                                    pt-0.5
                                    border-0 border-b-2 border-gray-200
                                    bg-transparent
                                    focus:border-black focus:ring-0
                                " placeholder="joe@example.com" />
                            </label>
                            <label class="block">
                                <span class="text-gray-700">Please select a Wifi-Pass from the list below</span>
                                <select class="
                                    block
                                    w-full
                                    mt-0
                                    px-0.5
                                    pt-0.5
                                    border-0 border-b-2 border-gray-200
                                    bg-transparent
                                    focus:ring-0 focus:border-black
                                ">
                                    <option value={"https://buy.stripe.com/test_fZeeYf5G47yrfYc9AA"}>1 Day Pass - $15</option>
                                    <option>2 Day Pass - $30</option>
                                    <option>5 Day Pass - $65</option>
                                    <option>7 Day Pass - $70</option>
                                </select>
                            </label>
                            <button className="
                                bg-primary
                                hover:bg-primary/80
                                text-white
                                w-2/3
                                py-2
                                px-4
                                mx-auto
                            ">
                                Continue to Stripe for Payment
                            </button>
                            <a href="#" className="
                                text-center
                                text-primary
                                hover:text-primary/80
                            ">
                                If you already have an existing pass, click here
                            </a>
                        </div>
                    </form>
                </div>
                <div className="
                    flex
                    justify-between
                    mt-5
                    h-12
                    text-sm
                    leading-8
                ">
                    <a href="" role='button' onClick={(e) => {this.toggleShow(e)}} style={{backgroundColor: showInfo?"rgba(184, 37, 43, 0.8)":"#b8252b"}} id='info' value="info" className="
                        bg-primary
                        text-white
                        text-center
                        align-text-bottom
                        py-2
                        px-4
                        w-1/3
                        hover:bg-primary/80
                    ">
                        Your Info
                    </a>
                    <a href="" role='button' onClick={(e) => {this.toggleShow()}} id='terms' className="
                        bg-primary
                        text-white
                        text-center
                        py-2
                        px-1
                        w-1/3
                        hover:bg-primary/80
                    ">
                        Terms & Conditions
                    </a>
                    <a href="" role='button' onClick={(e) => {this.toggleShow()}} id='privacy' className="
                        bg-primary
                        text-white
                        text-center
                        py-2
                        px-4
                        w-1/3
                        hover:bg-primary/80
                    ">
                        Privacy Policy
                    </a>
                </div>
                <div className="flex flex-col bg-gray/80 w-full ps-2 py-2" style={{display: showInfo?"block":"none"}}>
                    <p>
                        Once you have logged in and signed up for our news and offers we will send you an email that contains a link so you can remove your email from our information at any point.
                    </p>
                    <p>
                        We collect information when you sign-in and connect to the Wi-Fi these include email, firstname, lastname, mac address of the device, time and the assigned IP address. As well as any extra questions that may of been asked when you connect.
                    </p>
                    <p>
                        For futher information on the data we collect and how it is used, please see our Privacy Policy.
                    </p>
                </div>
                <div className=" flex flex-col bg-gray/80 w-full ps-2 py-2 hidden">
                    <p>
                        <b>Wireless Terms of Use & User License Agreement/Disclaimer</b>
                    </p>
                    <p>
                        We offer public wireless WiFi internet access services (the Service) to its guests (Guest or User or You or Your). This Service allows You to access the internet by connecting a wireless enabled device to Our network resources. Guests seeking to use Our network must first agree to the following terms of use (Terms of Use):
                    </p>
                    <p>
                        1. When and as available, we will allow You non-exclusive WiFi connectivity while on Our premises. However, we do not guarantee You an internet connection; the bandwidth provided shall be at our sole discretion and Your usage may be terminated by Us at anytime without further notice.
                    </p>
                    <p>
                        2. While we may agree to troubleshoot any connectivity problems on our network, We will not provide technical assistance for any devices not owned by Us. Any assistance you might receive from us is strictly on an as is basis, without any warranties or representations.
                    </p>
                    <p>
                        3. The Services may be used for lawful purposes only. Internet access through Our WiFi Service is filtered, may be monitored, and We may block or restrict access to certain websites based upon Our security policies in place from time to time. Any content deemed illegal, inappropriate or unethical, including but not limited to content considered by Us to be copyrighted, protected by trade secret regulation, threatening, defamatory, pornographic, illegal or terrorist in nature, may be blocked. Use of Our WiFi Services for activities deemed by Us to be illegal may be recorded, traced and turned over to the appropriate local, state or federal law enforcement authorities. However, this right to monitor in no way creates an obligation or duty on Our part to monitor Your access and Your access to any content through Our Service in no way implies or warrants the content is either legal or appropriate.
                    </p>
                    <p>
                        4. From time to time We may monitor the exchange of content through a Guests wireless access device as part of an investigation regarding the content and/or activities of internet usage (in search of hackers, those gaining illegal access to computer systems, and for network management). If pursuant to any such investigation We are granted or obtain access to any Guest device or content, We will limit Our access and use solely to conduct such investigation and We will take all necessary and reasonable steps to treat all such accessed content as confidential and will protect it from improper disclosure to any third-party or entity, using the same level of care to prevent disclosure or unauthorized use as We exercise in protecting Our own information of a similar nature.
                    </p>
                    <p>
                        5. When using Our Service You are giving consent to the use of cookies. Upon logging into Our Service you may provide some personal information, such as e-mail address. If you Opt in to news/offers you consent to allowing us to periodically send to You e-mails about Our company, products and services. We will never sell or otherwise share Your e-mail address with non-affiliated companies.
                    </p>
                    <p>
                        6. Using Our Service, You may download and upload content to and from Your wireless access device. Be advised that content sent to and from a wireless access device using Our WiFi connection can be captured by anyone with appropriate technical knowledge. Although We incorporate wireless encryption technology into our Service, use of Our Service is at Your sole risk. We are not responsible for Your content whether it is personal and/or corporate in nature, and You assume sole responsibility for any theft, loss or corruption of Your device or content.
                    </p>
                    <p>
                        7. We are not responsible for any loss of or damage to, Your software and/or hardware, changes in configuration settings, security or data files while using Our WiFi Services. We are not responsible for any virus, Trojans, worms, malware or any other malicious software infecting Your wireless access device while connected to our WiFi network. We are not responsible for any power anomalies or other events that may cause damage to Your wireless access devices while using our Services.
                    </p>
                    <p>
                        8. Your access to other devices on Our private network such as printers, copiers, fax machines, scanners, etc., is strictly prohibited.
                    </p>
                    <p>
                        9. By agreeing to these terms of use you expressly understand that we may monitor all traffic in and out of our gateway and therefore may gain access to and/or gain knowledge of content transmitted to or by you while connected to our services. Our wifi services are provided - as is - we disclaim all warranties of any kind, either express or implied, including, without limitation, implied warranties of merchantability and fitness for a particular purpose. You agree to indemnify and hold us harmless from any claims resulting from your use of our wifi services. In no event will we be liable to you or any third party for any direct, indirect, special, incidental or consequential damages (including, without limitation, damages for loss of business/profits, data, hardware, or good will) arising out of the use of or inability to connect to the internet, even if we have been advised of the possibility of such damages.
                    </p>
                </div>
                <div className=" flex flex-col bg-gray/80 w-full ps-2 py-2 hidden">
                    <p>
                        <b>Privacy Policy 2023</b>
                    </p>
                    <p>
                        <b>Submitted Information</b>
                    </p>
                    <p>
                        The information you provide when you login, such as social media account or details provided on the login form.
                    </p>
                    <p>
                        <b>Additional Information </b>
                    </p>
                    <p>
                        We may collect information on the websites you visit. We do not collect any information used to make financial transactions.
                    </p>
                        <b>Device Information </b>
                    <p>
                        Information about the device (mobile phone, tablet, laptop etc) you are using.
                    </p>
                    <p>
                        <b>Location Information</b>
                    </p>
                    <p>
                        If Location is enabled, we collect information on where in the venue you have been.
                    </p>
                    <p>
                        <b>Network Information</b>
                    </p>
                    <p>
                        We may collect information from your device on the IP addresses, internet service providers, browser type, language, viewed and exit pages, and date and time stamps.
                    </p>
                    <p>
                        <b>Cookies</b>
                    </p>
                    <p>
                        We may use Cookies like a website would; to enable us to distinguish you from other users.
                    </p>
                    <p>
                        <b>How we store your data</b>
                    </p>
                    <p>
                        Data is stored on our own secure servers in accordance with local regulations. If you do not login in to a location for more than 24 months, all personally identifiable data we store about you is deleted. 
                    </p>
                    <p>
                        <b>How your data is used</b>
                    </p>
                    <p>
                        Your data may be used to understand how you use a particular venue, to communicate with your or to offer you relevant goods and services.
                    </p>
                    <p>
                        <b>Who may use your data</b>
                    </p>
                    <p>
                        Your data may be used by the owner of the venue you visited or selected third parties.
                    </p>
                    <p>
                        Your data may also be provided to regulatory bodies where we are under a legal obligation to do this, to protect our own rights or if we feel someones safety is at risk.
                    </p>
                    <p>
                        <b>Accessing your own data</b>
                    </p>
                    <p>
                        When you sign-up for news or special offers we send you an email to update your preferences.
                    </p>
                    <p>
                        You can request to be removed at any time using the link <a href="remove">here</a>.
                        Also you have the right to be forgotten and can remove all data we store on you on this system <a href="forget">here</a>.
                    </p>
                </div>
            </div>
        </div>
      </section>
  )
}

export default premium