
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X, CalendarIcon } from 'lucide-react';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageType?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, packageType = "Custom Adventure" }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    adults: 1,
    children: 0,
    interests: [] as string[],
    travelStyle: '',
    startDate: null as Date | null,
    endDate: null as Date | null,
    budget: '',
    additionalNotes: '',
    referralSource: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Adventure booking request submitted! We will contact you shortly to plan your perfect Tanzania experience.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleInterestChange = (interest: string) => {
    const updatedInterests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest];
    
    setFormData({ ...formData, interests: updatedInterests });
  };

  const today = new Date();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-cream-50 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-sage-200">
        <div className="sticky top-0 bg-cream-50 border-b border-sage-200 p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1e7b8c1b-e6f6-42c3-b3fe-feb49e40d03d.png" 
              alt="Nova Trails Logo" 
              className="w-8 h-8"
            />
            <h2 className="text-2xl font-bold text-sage-900">Plan Your Tanzania Adventure</h2>
          </div>
          <button onClick={onClose} className="text-sage-400 hover:text-sage-600">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sage-900 border-b border-sage-200 pb-2">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Nationality *</label>
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
                placeholder="e.g., American, British, German"
                className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
              />
            </div>
          </div>

          {/* Travel Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sage-900 border-b border-sage-200 pb-2">Travel Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">Number of Adults *</label>
                <select
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
                >
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">Number of Children *</label>
                <select
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
                >
                  {[0,1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-sage-700 mb-3">What are you interested in? *</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Safari', 'Zanzibar', 'Kilimanjaro', 'Arusha', 'Joint Safari'].map((interest) => (
                  <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="w-4 h-4 text-terracotta-500 border-sage-300 rounded focus:ring-terracotta-500"
                    />
                    <span className="text-sm text-sage-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Who's Joining You on Your Adventure? *</label>
              <select
                name="travelStyle"
                value={formData.travelStyle}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
              >
                <option value="">Select your travel style</option>
                <option value="Solo Explorer">Solo Explorer</option>
                <option value="Couple's Getaway">Couple's Getaway</option>
                <option value="Family Adventure">Family Adventure</option>
                <option value="Group Travel">Group Travel</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">Start Date *</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal border-sage-300 hover:border-terracotta-500 bg-white",
                        !formData.startDate && "text-sage-500"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startDate ? format(formData.startDate, "PPP") : <span>Select start date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.startDate || undefined}
                      onSelect={(date) => setFormData({...formData, startDate: date || null})}
                      disabled={(date) => date < today}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="block text-sm font-medium text-sage-700 mb-2">End Date *</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal border-sage-300 hover:border-terracotta-500 bg-white",
                        !formData.endDate && "text-sage-500"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.endDate ? format(formData.endDate, "PPP") : <span>Select end date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.endDate || undefined}
                      onSelect={(date) => setFormData({...formData, endDate: date || null})}
                      disabled={(date) => date < (formData.startDate || today)}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Budget Planning (USD) *</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
              >
                <option value="">Select your budget range</option>
                <option value="Under $1,000">Under $1,000</option>
                <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="Over $10,000">Over $10,000</option>
              </select>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sage-900 border-b border-sage-200 pb-2">Additional Information</h3>
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Additional Notes</label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
                placeholder="Share anything else to make your trip perfect - dietary requirements, special occasions, accessibility needs, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">How did you hear about us?</label>
              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
              >
                <option value="">Please select</option>
                <option value="Friends">Friends</option>
                <option value="Social Media">Social Media</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="bg-cream-100 p-4 rounded-lg border border-sage-200">
            <h3 className="font-semibold text-sage-900 mb-2">What's Next?</h3>
            <ul className="text-sm text-sage-700 space-y-1">
              <li>• Our travel experts will review your adventure preferences</li>
              <li>• We'll create a personalized itinerary within 24 hours</li>
              <li>• All accommodations and activities are carefully selected</li>
              <li>• Full support from arrival to departure</li>
              <li>• Flexible booking with transparent pricing</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-sage-300 text-sage-700 hover:bg-sage-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-terracotta-500 to-sage-600 hover:from-terracotta-600 hover:to-sage-700 text-white"
            >
              Submit Adventure Request
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
