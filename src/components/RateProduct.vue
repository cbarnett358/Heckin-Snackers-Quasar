<template>
  <h4 class="text-info q-mb-sm">Review Product</h4>

  
  <q-form @submit="onSubmit" class="q-gutter-md">
      <q-rating
        name="quality"
        v-model="quality"
        max="4"
        size="2em"
        color="info"
        icon="pets"
       
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>

    <q-card v-if="submitResult.length > 0" flat bordered class="q-mt-md bg-grey-2">
     
      <q-separator />
      <q-card-section class="row q-gutter-sm items-center">
        <div
          v-for="(item, index) in submitResult"
          :key="index"
          class="q-py-xs text-info rounded-borders text-h6 text-no-wrap"
        >Rating: {{ item.value }}</div>
      </q-card-section>
    </q-card>







 

</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "RateProduct",


  setup () {
    const submitResult = ref([])

    return {
      quality: ref(3),
      submitResult,

      onSubmit (evt) {
        const formData = new FormData(evt.target)

        const data = []
        
        
        for (const [ name, value ] of formData.entries()) {
          data.push({
            name,
            value
          })
        }
                     //display value as stars
                    submitResult.value = data.map(item => {
                  //return quality as material icon
                  if (item.name === 'quality') {
                    return {
                      name: item.name,
                      //use a material icon for the value
                      value: '⭐'.repeat(item.value)
                 

                    }
                  }
                  return item
                })
                
  
      }
    }
  }
})
</script>


