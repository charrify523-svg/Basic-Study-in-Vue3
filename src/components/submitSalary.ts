import { ref } from 'vue'

export default function submitSalary(){
  const username = ref('roy');
  const salary = ref(15000);  
  function submit(){
    salary.value += 1000;
    console.log(salary.value);
  }
  return {
    username,
    salary,
    submit
  }
}
