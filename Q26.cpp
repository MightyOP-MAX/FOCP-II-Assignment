/*Q26. The school report card system stores subject marks for each student. 
Implement a solution to accept marks in 5 subjects, compute the total and percentage, and display the result.*/
#include<iostream>
using namespace std;
int main(){
int M[5], total = 0;
float percentage;
cout<<"Enter marks of 5 subjects: "<<endl;
for(int i = 0; i < 5; i++)
{
    cin >>M[i];
    total =total+M[i];
}
cout<<"Total marks of 5 subjects are: "<< total<<endl;

percentage = (total/500.0) * 100;
cout << "Percentage: " << percentage << "%" << endl;

    return 0;
}