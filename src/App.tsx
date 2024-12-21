import { useState } from 'react';

interface Category {
  id: number;
  name: string;
  description: string;
}

const categories: Category[] = [
  { id: 1, name: 'HTML', description: 'Hypertext Markup Language' },
  { id: 2, name: 'CSS', description: 'Cascading Style Sheets' },
  { id: 3, name: 'JavaScript', description: 'Programming Language' },
  { id: 4, name: 'React', description: 'JavaScript Library' },
  { id: 5, name: 'API Integration', description: 'Application Programming Interface' },
];

const WebsiteDevelopment = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Interactive Website Development</h1>
      <div className="flex flex-wrap justify-center mb-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`bg-gray-100 p-4 rounded-lg shadow-md cursor-pointer ${selectedCategory?.id === category.id ? 'bg-gray-200' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            <h2 className="text-lg font-bold text-gray-900">{category.name}</h2>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-lg font-bold text-gray-900">{selectedCategory.name}</h2>
          <p className="text-gray-600">{selectedCategory.description}</p>
          <div className="flex flex-wrap justify-center mt-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
          </div>
        </div>
      )}
    </div>
  );
};

export default WebsiteDevelopment;