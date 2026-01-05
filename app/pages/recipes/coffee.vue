<template>
  <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <NuxtLink to="/" class="inline-flex items-center text-white hover:text-white/80 transition-colors mb-8 group">
        <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Recipes
      </NuxtLink>

      <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div class="bg-gradient-to-r from-amber-700 to-orange-600 px-8 py-12 text-white">
          <h1 class="text-4xl sm:text-5xl font-black mb-4">Freshly Brewed U.S. Style Coffee</h1>
        </div>

        <div class="px-8 py-12 space-y-10">
          <section>
            <p class="text-2xl text-gray-700 italic mb-6 text-center">
              Ever asked yourself how to recreate diner style coffee?
            </p>
            <div class="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-center text-white shadow-xl">
              <p class="text-xl font-bold">Two key ingredients:</p>
              <p class="text-3xl font-black mt-2">Strong, dark coffee + Half and half</p>
            </div>
          </section>

          <section class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-l-4 border-blue-500">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span class="mr-3 text-2xl">💡</span> About Half and Half
            </h2>
            <p class="text-gray-700 leading-relaxed">
              Half and half usually has 10% to 12% of fat. So if we mix 100 ml 3.5% whole milk and 50 ml 32% heavy cream, we end up with a dairy product with 13% of fat - close enough!
            </p>
          </section>

          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-amber-100 text-amber-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                ☕
              </span>
              My Favorite Recipe
            </h2>
            <div class="space-y-4">
              <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                <div class="flex items-start">
                  <span class="text-amber-600 mr-4 text-2xl font-bold">1</span>
                  <div>
                    <p class="text-gray-800 font-semibold">The Coffee</p>
                    <p class="text-gray-600">Use 15g of freshly ground dark roast beans to brew 250 ml of coffee</p>
                  </div>
                </div>
              </div>
              <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <div class="flex items-start">
                  <span class="text-blue-600 mr-4 text-2xl font-bold">2</span>
                  <div>
                    <p class="text-gray-800 font-semibold">The Cream</p>
                    <p class="text-gray-600">Mix 100ml 3.5% whole milk / Vollmilch (65 kcal) and 50ml 32% heavy cream / Schlagsahne (175 kcal)</p>
                    <p class="text-gray-600 mt-1">Heat it up and add to the coffee</p>
                  </div>
                </div>
              </div>
              <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200">
                <div class="flex items-start">
                  <span class="text-pink-600 mr-4 text-2xl font-bold">3</span>
                  <div>
                    <p class="text-gray-800 font-semibold">The Sweetness</p>
                    <p class="text-gray-600">Finally, I use 1½ sugar cubes (25 kcal)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-center text-white shadow-xl">
            <p class="text-2xl font-bold mb-2">Result</p>
            <p class="text-xl">400ml of very tasty coffee</p>
            <p class="text-3xl font-black mt-4">265 kcal total</p>
          </section>

          <section class="text-center py-8">
            <div class="inline-block bg-gray-100 rounded-2xl p-8">
              <p class="text-6xl mb-4">☕</p>
              <p class="text-gray-600 italic">No pics here, it's really just coffee ;)</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
