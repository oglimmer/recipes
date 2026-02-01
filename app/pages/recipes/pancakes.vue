<template>
    <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <NuxtLink to="/"
                class="inline-flex items-center text-white hover:text-white/80 transition-colors mb-8 group">
                <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Recipes
            </NuxtLink>

            <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div class="bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-12 text-white">
                    <h1 class="text-4xl sm:text-5xl font-black mb-4">Perfect US Style Pancakes</h1>
                </div>

                <div class="px-8 py-12 space-y-12">
                    <section>
                        <p class="text-xl text-gray-700 leading-relaxed mb-6">
                            Perfect US style pancakes are not too hard to make, but there is one thing you really need
                            to understand:
                        </p>
                        <div
                            class="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-center shadow-xl transform hover:scale-105 transition-transform">
                            <h2 class="text-4xl font-black text-white">DO NOT OVER STIR!</h2>
                        </div>
                    </section>

                    <section>
                        <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <span
                                class="bg-yellow-100 text-yellow-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                🎥
                            </span>
                            Recipe Video
                        </h2>
                        <a href="https://www.youtube.com/watch?v=4QcK3MXl9sg" target="_blank"
                            class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-yellow-200 block">
                            <div class="flex items-center">
                                <span class="text-2xl mr-4">▶️</span>
                                <span class="text-lg font-semibold text-gray-800">Watch the Recipe Video</span>
                            </div>
                        </a>
                    </section>

                    <section>
                        <div class="flex items-center justify-between mb-6">
                            <h2 class="text-3xl font-bold text-gray-900 flex items-center">
                                <span
                                    class="bg-yellow-100 text-yellow-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                    🥣
                                </span>
                                Ingredients
                            </h2>
                            <div class="flex items-center gap-3 bg-gray-100 rounded-full p-1">
                                <button @click="useMetric = false" :class="[
                                    'px-4 py-2 rounded-full text-sm font-semibold transition-all',
                                    !useMetric ? 'bg-yellow-500 text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
                                ]">
                                    US
                                </button>
                                <button @click="useMetric = true" :class="[
                                    'px-4 py-2 rounded-full text-sm font-semibold transition-all',
                                    useMetric ? 'bg-yellow-500 text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
                                ]">
                                    Metric
                                </button>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-3 gap-6">
                            <div
                                class="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
                                <h3 class="text-xl font-bold text-gray-900 mb-4">Dry Mixture</h3>
                                <ul class="space-y-2 text-gray-700">
                                    <li>{{ ingredients.flour }} all-purpose flour</li>
                                    <li>{{ ingredients.sugarDry }} granulated sugar</li>
                                    <li>{{ ingredients.bakingPowder }} baking powder</li>
                                    <li>{{ ingredients.bakingSoda }} baking soda</li>
                                    <li>Pinch of salt</li>
                                </ul>
                            </div>
                            <div
                                class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200">
                                <h3 class="text-xl font-bold text-gray-900 mb-4">Wet Mixture</h3>
                                <ul class="space-y-2 text-gray-700">
                                    <li>{{ ingredients.butter }} butter, melted</li>
                                    <li>4 eggs, yolks and whites separated</li>
                                    <li>{{ ingredients.buttermilk }} buttermilk</li>
                                    <li>{{ ingredients.sugarWet }} granulated sugar</li>
                                </ul>
                            </div>
                            <div
                                class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
                                <h3 class="text-xl font-bold text-gray-900 mb-4">Optional</h3>
                                <ul class="space-y-2 text-gray-700">
                                    <li>Fresh blueberries</li>
                                    <li>Fresh bananas</li>
                                    <li>Maple syrup</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <span
                                class="bg-yellow-100 text-yellow-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                👨‍🍳
                            </span>
                            Instructions
                        </h2>
                        <div class="space-y-6">
                            <div class="flex gap-4">
                                <span
                                    class="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                                <p class="text-gray-700">Grab two bowls.</p>
                            </div>
                            <div class="flex gap-4">
                                <span
                                    class="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                                <p class="text-gray-700">Put all the dry ingredients in bowl one and mix
                                    them together</p>
                            </div>
                            <div class="flex gap-4">
                                <span
                                    class="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                                <p class="text-gray-700">Put all the wet ingredients in the other bowl and mix those
                                    together as well.
                                    If your butter has solidified, gently warm it up—or just wait for it to come to room
                                    temperature.</p>
                            </div>
                            <div class="flex gap-4">
                                <span
                                    class="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                                <p class="text-gray-700">Now for the most important part: combine the wet and dry
                                    mixtures slowly and gently. Do not stir vigorously. Do not over-mix. Just fold them
                                    together with ease. A few lumps in the batter? That's perfectly fine—actually, it's
                                    better that way. Over-stirring develops the gluten and will make your pancakes flat
                                    and tough.</p>
                            </div>
                            <div class="flex gap-4">
                                <span
                                    class="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
                                <p class="text-gray-700">Heat a pan or skillet on low to medium heat. Spoon the batter
                                    into the pan, wait for bubbles to form on the surface and the edges to set, then
                                    flip once. That's it. Serve with maple syrup and enjoy.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <span
                                class="bg-yellow-100 text-yellow-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                📸
                            </span>
                            Gallery
                        </h2>
                        <div class="grid md:grid-cols-3 gap-6">
                            <img :src="useImagePath('/IMG_7644.jpg')" alt="Pancakes"
                                class="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                            <img :src="useImagePath('/IMG_7641.jpg')" alt="Pancakes"
                                class="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                            <img :src="useImagePath('/IMG_0881.jpeg')" alt="Pancakes"
                                class="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const useMetric = ref(false)

const ingredients = computed(() => {
    if (useMetric.value) {
        return {
            flour: '250g',
            sugarDry: '36g',
            bakingPowder: '5g',
            bakingSoda: '5g',
            butter: '55g',
            buttermilk: '500ml',
            sugarWet: '12g'
        }
    }
    return {
        flour: '2 cups',
        sugarDry: '3 tablespoons',
        bakingPowder: '1 teaspoon',
        bakingSoda: '1 teaspoon',
        butter: '4 tablespoons',
        buttermilk: '2 cups',
        sugarWet: '1 tablespoon'
    }
})
</script>
