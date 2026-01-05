<template>
  <div class="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <header class="text-center mb-16 animate-fade-in">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 drop-shadow-2xl tracking-tight">
          Oli's Recipe Collection
        </h1>
        <p class="text-xl sm:text-2xl text-white/90 font-light">
          Delicious recipes from around the world
        </p>
        <div class="mt-6 flex justify-center">
          <div class="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 text-white font-medium">
            {{ recipes.length }} Amazing Recipes
          </div>
        </div>
      </header>

      <!-- Recipe Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="recipe in recipes"
          :key="recipe.slug"
          :to="`/recipes/${recipe.slug}`"
          class="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-pink-500/20 transform hover:-translate-y-2 transition-all duration-300 hover:scale-105"
        >
          <!-- Image Container -->
          <div class="relative h-64 overflow-hidden">
            <div
              v-if="recipe.image"
              class="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
              :style="{ backgroundImage: `url(${recipe.image})` }"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>
            <div
              v-else
              class="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400"
            >
              <div class="absolute inset-0 flex items-center justify-center">
                <svg class="w-24 h-24 text-white/30" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-4 right-4">
              <span class="bg-white/95 backdrop-blur-sm text-purple-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {{ recipe.category }}
              </span>
            </div>

            <!-- Title Overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h2 class="text-2xl font-bold text-white mb-2 line-clamp-2">
                {{ recipe.title }}
              </h2>
              <p class="text-white/90 text-sm line-clamp-2">
                {{ recipe.description }}
              </p>
            </div>
          </div>

          <!-- Card Footer -->
          <div class="p-6 bg-gradient-to-br from-gray-50 to-white">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-600 font-medium">View Recipe</span>
              <svg class="w-5 h-5 text-purple-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Footer -->
      <footer class="mt-20 text-center text-white/80 pb-8">
        <p class="text-lg font-light">Made with love by Oli</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
const recipes = [
  {
    slug: 'burger',
    title: "Oli's US Style Smashed Burger",
    description: 'Proper U.S. style smashed burger recipe',
    category: 'Main Course',
    image: '/IMG_7285.jpg'
  },
  {
    slug: 'pancakes',
    title: 'Perfect US Style Pancakes',
    description: 'Fluffy American pancakes',
    category: 'Breakfast',
    image: '/IMG_7644.jpg'
  },
  {
    slug: 'chili',
    title: "Oli's Red Chili with Beans",
    description: 'Spicy and hearty chili con carne',
    category: 'Main Course',
    image: '/IMG_7259.jpeg'
  },
  {
    slug: 'street-tacos',
    title: "Oli's German Street Tacos",
    description: 'Authentic street-style tacos',
    category: 'Main Course',
    image: '/IMG_0155.JPG'
  },
  {
    slug: 'buletten',
    title: 'German Meat Balls (Buletten)',
    description: 'Traditional German meatballs',
    category: 'Main Course',
    image: '/IMG_8735.JPG'
  },
  {
    slug: 'lasagna',
    title: 'Lasagne',
    description: 'Classic Italian lasagna',
    category: 'Main Course',
    image: '/P1010265.JPG'
  },
  {
    slug: 'coffee',
    title: 'Freshly Brewed U.S. Style Coffee',
    description: 'Diner-style coffee recipe',
    category: 'Beverage',
    image: null
  },
  {
    slug: 'grilled-cheese',
    title: 'Guacamole Bacon Grilled Cheese',
    description: 'Ultimate comfort sandwich',
    category: 'Sandwich',
    image: '/IMG_3836.JPG'
  },
  {
    slug: 'suppe',
    title: 'Suppe',
    description: 'Hearty German soup',
    category: 'Soup',
    image: null
  }
]
</script>
