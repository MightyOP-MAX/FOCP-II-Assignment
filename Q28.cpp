/*Q28. A data processing system classifies even and odd inputs separately. Implement a solution to 
store 5 elements in an array, compute sum of all even and sum of all odd numbers.*/
#include<iostream>
using namespace std;
int main(){

    int a[5], i;
    int even= 0, odd= 0;

    cout<<"Enter 5 elements:\n";
    for(i = 0; i < 5; i++) 
    {
        cin>>a[i];
    }

    for(i = 0; i < 5; i++) 
    {
        if(a[i] % 2 == 0)
            even += a[i];
        else
            odd += a[i];
    }

    cout<<"Sum of even numbers = "<<even;
    cout<<"Sum of odd numbers = "<<odd;

    return 0;
}