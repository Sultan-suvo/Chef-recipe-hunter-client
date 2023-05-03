import React from 'react';
import person2 from '../../assets/person 2.png'
import person3 from '../../assets/person 3.png'


const FeedbackSection = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-5xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-gray-500 mb-4">John Doe, CEO of Company XYZ</div>
                        <div className="text-gray-800 text-xl font-bold mb-4">"Your food recipes have revolutionized the way we cook and eat at home. My family and I are now able to enjoy delicious and healthy meals every day. Thank you for making cooking fun and easy!"</div>
                        <div className="flex items-center">
                            <img className="w-12 h-12 rounded-full mr-4" src="https://source.unsplash.com/100x100/?portrait" alt="Customer avatar" />
                            <div>
                                <div className="font-bold text-gray-800">Mary Smith</div>
                                <div className="text-gray-500 text-sm">Marketing Manager, Company ABC</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-gray-500 mb-4">Jane Doe, COO of Company XYZ</div>
                        <div className="text-gray-800 text-xl font-bold mb-4">"I've never been much of a cook, but your website has given me the confidence to try new things and explore different cuisines. Your step instructions and helpful tips have made cooking a breeze!"</div>
                        <div className="flex items-center">
                            <img className="w-12 h-12 rounded-full mr-4" src={person2} alt="Customer avatar" />
                            <div>
                                <div className="font-bold text-gray-800">Bob Johnson</div>
                                <div className="text-gray-500 text-sm">CTO, Company ABC</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="text-gray-500 mb-4">Jim Smith, CFO of Company XYZ</div>
                        <div className="text-gray-800 text-xl font-bold mb-4">"Your recipes are simply amazing! I've tried several of them and they never fail to impress. Your website has become my go-to source for meal inspiration and I recommend it to everyone I know."</div>
                        <div className="flex items-center">
                            <img className="w-12 h-12 rounded-full mr-4" src={person3} alt="Customer avatar" />
                            <div>
                                <div className="font-bold text-gray-800">Lisa Rodriguez</div>
                                <div className="text-gray-500 text-sm">Customer Success Manager, Company ABC</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FeedbackSection;
