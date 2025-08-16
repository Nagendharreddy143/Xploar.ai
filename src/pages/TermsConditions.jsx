import React from "react";
import { Link } from "react-router-dom";
import useAos from "../hooks/useAos";

const TermsConditions = () => {
    useAos();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-6 py-8">
                    <Link to="/" className="text-2xl font-bold font-space-grotesk text-cosmic-indigo">
                        Xploar.ai
                    </Link>
                    <h1 className="mt-8 text-4xl font-bold text-cosmic-indigo">Terms and Conditions</h1>
                    <p className="mt-4 text-gray-600">Last updated: December 19, 2024</p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
                    <div className="prose prose-lg max-w-none">
                        <div data-aos="fade-up">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">1. Acceptance of Terms</h2>
                            <p className="text-gray-700 mb-6">
                                By accessing and using Xploar.ai ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="100">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">2. Description of Service</h2>
                            <p className="text-gray-700 mb-6">
                                Xploar.ai is an AI-powered learning platform designed to help UPSC aspirants and other students prepare for competitive examinations. Our services include:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                                <li>Personalized study plans and roadmaps</li>
                                <li>AI-powered mock tests and assessments</li>
                                <li>Answer evaluation and feedback</li>
                                <li>Voice-based tutoring and doubt resolution</li>
                                <li>Current affairs and study materials</li>
                                <li>Progress tracking and analytics</li>
                            </ul>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="200">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">3. User Accounts and Registration</h2>
                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">3.1 Account Creation</h3>
                            <p className="text-gray-700 mb-4">To access certain features of our Service, you must create an account. You agree to:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                                <li>Provide accurate, current, and complete information</li>
                                <li>Maintain and update your account information</li>
                                <li>Keep your account credentials secure and confidential</li>
                                <li>Accept responsibility for all activities under your account</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">3.2 Account Security</h3>
                            <p className="text-gray-700 mb-6">
                                You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized use of your account.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="300">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">4. Acceptable Use Policy</h2>
                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">4.1 Permitted Uses</h3>
                            <p className="text-gray-700 mb-4">You may use our Service for:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                                <li>Personal educational purposes</li>
                                <li>Preparing for competitive examinations</li>
                                <li>Accessing study materials and resources</li>
                                <li>Participating in assessments and evaluations</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">4.2 Prohibited Uses</h3>
                            <p className="text-gray-700 mb-4">You agree not to:</p>
                            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                                <li>Use the Service for any illegal or unauthorized purpose</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Interfere with or disrupt the Service or servers</li>
                                <li>Share your account credentials with others</li>
                                <li>Use automated tools to access the Service</li>
                                <li>Violate any applicable laws or regulations</li>
                            </ul>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="400">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">5. Intellectual Property Rights</h2>
                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">5.1 Our Rights</h3>
                            <p className="text-gray-700 mb-6">
                                The Service and its original content, features, and functionality are owned by Xploar.ai and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                            </p>

                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">5.2 Your Rights</h3>
                            <p className="text-gray-700 mb-6">
                                You retain ownership of any content you submit to our Service. By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display your content for educational purposes.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="500">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">6. Payment Terms</h2>
                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">6.1 Subscription Plans</h3>
                            <p className="text-gray-700 mb-6">
                                We offer various subscription plans for premium features. All fees are payable in advance and are non-refundable except as provided in our refund policy.
                            </p>

                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">6.2 Payment Processing</h3>
                            <p className="text-gray-700 mb-6">
                                Payments are processed through secure third-party payment gateways. We do not store your payment information on our servers.
                            </p>

                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">6.3 Refund Policy</h3>
                            <p className="text-gray-700 mb-6">
                                Refunds may be provided within 7 days of purchase if you are not satisfied with our Service. Refund requests must be submitted through our customer support.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="600">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">7. Privacy and Data Protection</h2>
                            <p className="text-gray-700 mb-6">
                                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your personal information.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="700">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">8. Disclaimers and Limitations</h2>
                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">8.1 Service Availability</h3>
                            <p className="text-gray-700 mb-6">
                                We strive to provide continuous service availability but do not guarantee uninterrupted access. The Service may be temporarily unavailable due to maintenance, updates, or technical issues.
                            </p>

                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">8.2 Educational Content</h3>
                            <p className="text-gray-700 mb-6">
                                While we strive to provide accurate and up-to-date educational content, we do not guarantee the accuracy, completeness, or reliability of any information provided through our Service.
                            </p>

                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">8.3 Limitation of Liability</h3>
                            <p className="text-gray-700 mb-6">
                                To the maximum extent permitted by law, Xploar.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="800">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">9. Termination</h2>
                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">9.1 Termination by You</h3>
                            <p className="text-gray-700 mb-6">
                                You may terminate your account at any time by contacting our customer support or using the account deletion feature in your account settings.
                            </p>

                            <h3 className="text-xl font-semibold text-cosmic-indigo mb-4">9.2 Termination by Us</h3>
                            <p className="text-gray-700 mb-6">
                                We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or the Service.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="900">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">10. Governing Law and Dispute Resolution</h2>
                            <p className="text-gray-700 mb-6">
                                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="1000">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">11. Changes to Terms</h2>
                            <p className="text-gray-700 mb-6">
                                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website and updating the "Last updated" date.
                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="1100">
                            <h2 className="text-2xl font-bold text-cosmic-indigo mb-6">12. Contact Information</h2>
                            <p className="text-gray-700 mb-6">
                                If you have any questions about these Terms and Conditions, please contact us:
                            </p>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-cosmic-indigo mb-2">Legal Department</h4>
                                        <p className="text-gray-700">Email: legal@xploar.ai</p>
                                        <p className="text-gray-700">Phone: +91-XXXXXXXXXX</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-cosmic-indigo mb-2">Customer Support</h4>
                                        <p className="text-gray-700">Email: support@xploar.ai</p>
                                        <p className="text-gray-700">Address: Hyderabad, Telangana, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="1200" className="mt-12 pt-8 border-t border-gray-200">
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

export default TermsConditions;