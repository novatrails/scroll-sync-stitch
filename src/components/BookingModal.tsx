
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';

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
    startDate: '',
    endDate: '',
    package: packageType,
    pickupLocation: 'Arusha Airport',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the booking data to your backend
    alert('Booking request submitted! We will contact you shortly.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Book Your Adventure</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Package</label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="Arusha Explorer">Arusha Explorer - $899/person</option>
                <option value="Kilimanjaro Trek">Kilimanjaro Trek - $2,499/person</option>
                <option value="Zanzibar Paradise">Zanzibar Paradise - $1,299/person</option>
                <option value="Custom Package">Custom Package - Contact for pricing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
              <select
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              placeholder="Any dietary restrictions, accessibility needs, or special requests..."
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Package Includes:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
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
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700"
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
