<template>
  <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Back Button -->
      <NuxtLink
        to="/"
        class="inline-flex items-center text-white hover:text-white/80 transition-colors mb-8 group"
      >
        <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Recipes
      </NuxtLink>

      <!-- Main Content Card -->
      <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <!-- Header -->
        <div class="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-12 text-white">
          <h1 class="text-4xl sm:text-5xl font-black mb-4">
            Oli's US Style Smashed Burger
          </h1>
          <p class="text-xl text-white/90 font-light">
            This is a recipe how to do proper U.S. style smashed burger in Germany
          </p>
        </div>

        <!-- Content -->
        <div class="px-8 py-12 space-y-12">
          <!-- Tools Needed -->
          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                🔧
              </span>
              Tools Needed
            </h2>
            <p class="text-gray-600 mb-4">These are absolutely necessary.</p>
            <div class="bg-gray-50 rounded-2xl p-6 space-y-3">
              <div class="flex items-start">
                <span class="text-purple-600 mr-3 mt-1">•</span>
                <div>
                  <strong class="text-gray-900">Patty Smasher:</strong>
                  <a href="https://www.amazon.de/gp/product/B07TYPZDN6" target="_blank" class="text-purple-600 hover:text-purple-700 ml-2">Amazon Link</a>
                </div>
              </div>
              <div class="flex items-start">
                <span class="text-purple-600 mr-3 mt-1">•</span>
                <span class="text-gray-700"><strong>Unbeschichtet Edelstahlpfanne mit Deckel</strong></span>
              </div>
              <div class="flex items-start">
                <span class="text-purple-600 mr-3 mt-1">•</span>
                <div>
                  <strong class="text-gray-900">Grillspachtel:</strong>
                  <a href="https://www.amazon.de/gp/product/B003AKCQXQ" target="_blank" class="text-purple-600 hover:text-purple-700 ml-2">Amazon Link</a>
                </div>
              </div>
            </div>
            <div class="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-xl">
              <p class="text-blue-800 text-sm italic">
                I am drawn when it comes to non-stick vs. regular pans. If you use an old fashioned pan, you might want to buy a good spatula.
              </p>
            </div>
          </section>

          <!-- Ingredients -->
          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                🥘
              </span>
              Ingredients
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-4">Beef</h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <span class="text-orange-600 mr-2">•</span>
                    <span>Use "halb und halb" (Beef & Pork mix)</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-orange-600 mr-2">•</span>
                    <span>Do not fiddle with the meat, just "cut" into chunks (~50g each)</span>
                  </li>
                </ul>
              </div>
              <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-4">Buns</h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <span class="text-yellow-600 mr-2">•</span>
                    <span><a href="https://www.edeka.de/de/produkte/edeka-4-brioche-burger-buns-250g" target="_blank" class="text-purple-600 hover:underline">EDEKA Brioche Burger Buns</a> - DO NOT USE ANY OTHER</span>
                  </li>
                </ul>
              </div>
              <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-4">Toppings</h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>Tomato, sliced</span></li>
                  <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>Lettuce, chopped</span></li>
                  <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>Onions, sliced</span></li>
                  <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span><a href="https://woerle.at/en/kaese/xxl-burger-slices/" target="_blank" class="text-purple-600 hover:underline">American Cheese</a></span></li>
                </ul>
              </div>
              <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-4">The Spread</h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-pink-600 mr-2">•</span><span>3 parts Ketchup</span></li>
                  <li class="flex items-start"><span class="text-pink-600 mr-2">•</span><span>1 part Mustard</span></li>
                  <li class="flex items-start"><span class="text-pink-600 mr-2">•</span><span>1 part Mayonnaise</span></li>
                  <li class="flex items-start"><span class="text-pink-600 mr-2">•</span><span>1 chopped pickled cucumber</span></li>
                  <li class="flex items-start"><span class="text-pink-600 mr-2">•</span><span>2 tsp cucumber water</span></li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Directions -->
          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                👨‍🍳
              </span>
              Directions
            </h2>
            <div class="space-y-6">
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-purple-500">
                <h3 class="text-xl font-bold text-gray-900 mb-3">Step 1: Toasting the Buns</h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="mr-2">1.</span><span>Butter both buns with a tea spoon of butter</span></li>
                  <li class="flex items-start"><span class="mr-2">2.</span><span>Put the buns into a pan on low-medium heat</span></li>
                </ul>
              </div>
              <div class="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border-l-4 border-orange-500">
                <h3 class="text-xl font-bold text-gray-900 mb-3">Step 2: Frying the Meat</h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="mr-2">1.</span><span>Heat a second pan to medium-high heat, add a bit of oil</span></li>
                  <li class="flex items-start"><span class="mr-2">2.</span><span>Put 2x 50g of meat into the pan</span></li>
                  <li class="flex items-start"><span class="mr-2">3.</span><span>Press each meat chunk down with the "patty smasher" (3-4 mm height)</span></li>
                  <li class="flex items-start"><span class="mr-2">4.</span><span>Fry for ~2 min until crust forms</span></li>
                  <li class="flex items-start"><span class="mr-2">5.</span><span>Turn it and add salt & pepper</span></li>
                  <li class="flex items-start"><span class="mr-2">6.</span><span>Add cheese, water, and cover for ~2 min</span></li>
                </ul>
              </div>
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500">
                <h3 class="text-xl font-bold text-gray-900 mb-3">Step 3: Assembling</h3>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="mr-2">1.</span><span>Add spread to both buns</span></li>
                  <li class="flex items-start"><span class="mr-2">2.</span><span>Add onions, tomatoes, and meat</span></li>
                  <li class="flex items-start"><span class="mr-2">3.</span><span>Enjoy!</span></li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Gallery -->
          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                📸
              </span>
              Gallery
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <img src="/IMG_7285.jpg" alt="Burger" class="rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300" />
              <img src="/IMG_7289.jpg" alt="Burger" class="rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
