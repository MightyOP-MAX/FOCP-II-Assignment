/*Q27. A supermarket software maintains item price lists. Implement a solution to store the prices of 10 
items in an array and display the maximum price.*/
#include<iostream>
using namespace std;
int main(){
int I[10],max;
max=0;
cout<<"enter price of items:";
for(int i =0;i<10;i++)
{
    
    cin>>I[i];

    if(max<I[i])
    {
        max=I[i];
    }

}
cout<<"Maximum price is:"<<max;
    return 0;
}