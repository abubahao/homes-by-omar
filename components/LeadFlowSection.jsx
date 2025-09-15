import { useState } from 'react';

/**
 * LeadFlowSection implements a simple multi‑step enquiry form inspired by Heyflow.
 * Visitors answer a few questions across multiple steps to generate a tailored lead.
 * The final submission is sent to formsubmit.co to forward details via email.
 */
export default function LeadFlowSection() {
  // keep track of the current step
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  // store form data across steps
  const [formData, setFormData] = useState({
    service: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
  });

  // handle service selection
  function selectService(service) {
    setFormData({ ...formData, service });
    setStep(2);
  }

  // handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // progress to next step
  function nextStep() {
    setStep((s) => Math.min(s + 1, totalSteps));
  }

  return (
    <section id="leadflow" className="bg-gray-100 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-display text-4xl mb-8 text-center">Let’s Get Started</h2>
        {/* progress indicator */}
        <div className="w-full bg-gray-300 rounded-full h-2 mb-8 overflow-hidden">
          <div
            className="bg-primary h-full transition-all"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
        {/* Step 1: choose service */}
        {step === 1 && (
          <div className="text-center space-y-6">
            <p className="text-lg text-gray-700">
              What are you looking to do?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {['Buy', 'Sell', 'Invest'].map((option) => (
                <button
                  key={option}
                  onClick={() => selectService(option)}
                  className="bg-white border border-primary text-primary font-medium px-6 py-3 rounded-md hover:bg-primary hover:text-black transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
        {/* Step 2: ask for budget */}
        {step === 2 && (
          <div className="space-y-6 max-w-md mx-auto">
            <p className="text-lg text-gray-700 text-center">
              What price range are you considering?
            </p>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a range</option>
              <option value="Under $500K">Under $500K</option>
              <option value="$500K – $1M">$500K – $1M</option>
              <option value="$1M – $2M">$1M – $2M</option>
              <option value="$2M+">$2M+</option>
            </select>
            <button
              onClick={nextStep}
              disabled={!formData.budget}
              className="w-full bg-primary text-black py-3 rounded-md font-medium hover:bg-primary/80 transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
        {/* Step 3: contact information & submission */}
        {step === 3 && (
          <form
            action="https://formsubmit.co/info@homesbyomar.com"
            method="POST"
            className="space-y-4 max-w-md mx-auto"
          >
            {/* Hidden fields to pass previous steps */}
            <input type="hidden" name="_subject" value="New Multi‑Step Lead" />
            <input type="hidden" name="Service" value={formData.service} />
            <input type="hidden" name="Budget" value={formData.budget} />
            <input type="hidden" name="_next" value="/thank-you" />
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              name="Phone"
              placeholder="Your Phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full bg-primary text-black py-3 rounded-md font-medium hover:bg-primary/80 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
}