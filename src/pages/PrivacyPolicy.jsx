import React from "react";
import { Link } from "react-router-dom";
import useAos from "../hooks/useAos";

const PrivacyPolicy = () => {
    useAos();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-6 py-8">
                    <Link to="/" className="text-2xl font-bold font-space-grotesk text-cosmic-indigo">
                        Xploar.ai
                    </Link>
                    <h1 className="mt-8 text-4xl font-bold text-cosmic-indigo">Privacy Policy</h1>
                    <p className="mt-4 text-gray-600">Last updated: December 19, 2024</p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
                    <div className="prose prose-lg max-w-none">
                        <div data-aos="fade-up">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">1. Introduction</h2>
                            <p className="text-gray-700 mb-6">
                                Welcome to Xploar.ai ("we," "our," or "us"). We are committed to protecting your privacy in accordance with the Information Technology Act, 2000, IT Rules 2011, and other applicable Indian laws.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="100">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">2. Information We Collect</h2>
                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">2.1 Personal Information</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                                <li><strong>Name and Contact Details:</strong> When you sign up for our waitlist or contact us</li>
                                <li><strong>Email Address:</strong> For account creation, notifications, and communication</li>
                                <li><strong>Educational Information:</strong> Your learning goals, study preferences, and progress data</li>
                                <li><strong>Usage Data:</strong> How you interact with our platform, study patterns, and performance metrics</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">2.2 Technical Information</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                                <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                                <li><strong>Cookies and Tracking:</strong> To enhance user experience and analyze platform usage</li>
                                <li><strong>Log Data:</strong> Server logs, access times, and pages viewed</li>
                            </ul>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">3. How We Use Your Information</h2>
                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">3.1 Primary Purposes</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                                <li><strong>Service Delivery:</strong> To provide personalized learning experiences and AI-powered recommendations</li>
                                <li><strong>Account Management:</strong> To create and maintain your account</li>
                                <li><strong>Communication:</strong> To send important updates, notifications, and educational content</li>
                                <li><strong>Platform Improvement:</strong> To enhance our services and develop new features</li>
                            </ul>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">4. Information Sharing and Disclosure</h2>
                            <p className="text-gray-700 mb-6">
                                We do not sell, trade, or rent your personal information to third parties for marketing purposes. We may share your information only in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                                <li><strong>Service Providers:</strong> With trusted partners who help us operate our platform</li>
                                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                                <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                                <li><strong>Consent:</strong> When you explicitly authorize us to share your information</li>
                            </ul>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="400">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">5. Data Security</h2>
                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">5.1 Security Measures</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                                <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                                <li><strong>Access Controls:</strong> Strict access controls and authentication protocols</li>
                                <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
                                <li><strong>Employee Training:</strong> Regular training on data protection</li>
                            </ul>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="500">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">6. Your Rights and Choices</h2>
                            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                                <li><strong>Access:</strong> Request a copy of your personal information</li>
                                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                            </ul>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="600">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">7. Cookies and Tracking Technologies</h2>
                            <p className="text-gray-700 mb-6">
                                We use cookies and similar technologies to enhance your experience, analyze usage patterns, and personalize content. You can control cookie settings through your browser preferences.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="700">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">8. Children's Privacy</h2>
                            <p className="text-gray-700 mb-6">
                                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="800">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">9. Changes to This Privacy Policy</h2>
                            <p className="text-gray-700 mb-6">
                                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="900">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">10. Contact Us</h2>
                            <p className="text-gray-700 mb-6">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-cosmic-indigo mb-2">Data Protection Officer</h4>
                                        <p className="text-gray-700">Email: dpo@xploar.ai</p>
                                        <p className="text-gray-700">Phone: +91-XXXXXXXXXX</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-cosmic-indigo mb-2">General Inquiries</h4>
                                        <p className="text-gray-700">Email: privacy@xploar.ai</p>
                                        <p className="text-gray-700">Address: Hyderabad, Telangana, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="1000" className="mt-12 pt-8 border-t border-gray-200">
                            <div className="text-center">
                                <Link to="/" className="inline-flex items-center px-6 py-3 bg-electric-aqua text-void-black font-semibold rounded-lg hover:bg-electric-aqua/90 transition-colors">
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;