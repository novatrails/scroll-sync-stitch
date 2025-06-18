
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

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, packageType = "Custom Package" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    startDate: null as Date | null,
    endDate: null as Date | null,
    package: packageType,
    pickupLocation: 'Arusha Airport',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking request submitted! We will contact you shortly.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const today = new Date();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-cream-50 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-sage-200">
        <div className="sticky top-0 bg-cream-50 border-b border-sage-200 p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1e7b8c1b-e6f6-42c3-b3fe-feb49e40d03d.png" 
              alt="Nova Trails Logo" 
              className="w-8 h-8"
            />
            <h2 className="text-2xl font-bold text-sage-900">Book Your Adventure</h2>
          </div>
          <button onClick={onClose} className="text-sage-400 hover:text-sage-600 nav-button-hover">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Number of Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Start Date</label>
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
                    {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}
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
              <label className="block text-sm font-medium text-sage-700 mb-2">End Date</label>
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
                    {formData.endDate ? format(formData.endDate, "PPP") : <span>Pick a date</span>}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Package</label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
              >
                <option value="Arusha Explorer">Arusha Explorer - $899/person</option>
                <option value="Kilimanjaro Trek">Kilimanjaro Trek - $2,499/person</option>
                <option value="Zanzibar Paradise">Zanzibar Paradise - $1,299/person</option>
                <option value="Custom Package">Custom Package - Contact for pricing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">Pickup Location</label>
              <select
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
              >
                <option value="Arusha Airport">Arusha Airport</option>
                <option value="Kilimanjaro Airport">Kilimanjaro International Airport</option>
                <option value="Zanzibar Airport">Zanzibar Airport</option>
                <option value="Zanzibar Port">Zanzibar Port</option>
                <option value="Hotel Pickup">Hotel Pickup</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-sage-700 mb-2">Special Requests</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-sage-300 rounded-lg focus:ring-2 focus:ring-terracotta-500 focus:border-terracotta-500 bg-white"
              placeholder="Any dietary restrictions, accessibility needs, or special requests..."
            />
          </div>

          <div className="bg-cream-100 p-4 rounded-lg border border-sage-200">
            <h3 className="font-semibold text-sage-900 mb-2">Package Includes:</h3>
            <ul className="text-sm text-sage-700 space-y-1">
              <li>• Airport/Port pickup and drop-off</li>
              <li>• Professional tour guide</li>
              <li>• Transportation to all attractions</li>
              <li>• Entry fees to national parks and sites</li>
              <li>• Accommodation (where applicable)</li>
              <li>• 24/7 customer support</li>
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
              className="flex-1 bg-gradient-to-r from-terracotta-500 to-sage-600 hover:from-terracotta-600 hover:to-sage-700 text-white nav-button-hover"
            >
              Submit Booking Request
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
