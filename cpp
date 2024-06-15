#include <iostream>

#define SIZE 10

using namespace std;
struct student
{
	int rollno;

	int marks;

};

class Hash
 {

   student rec[10];
   public:

	 int hashkey(int);
	 	 Hash()
	 {
	 	int i;
	 	for(i=0;i<10;i++)
	 	{


	 rec[i].rollno=-1;
	 rec[i].marks=-1;
}
	 }
	  void linprob(int,int);
	  void display(student []);
	  void displayhash();
	  int search(int );


};
int Hash::hashkey(int rollno)
{
	int key;
	key=rollno%10;
	return key;
}
void Hash::display(student rec[])
{
	int i;
	cout<<"-------------------------------------\n";
	cout<<"\t Roll No"<<"\t"<<"Marks"<<"\n\n";
	cout<<"-------------------------------------\n";
	 	for(i=0;i<10;i++)
	 cout<<i<<"\t"<<rec[i].rollno<<"\t\t"<<rec[i].marks<<"\n";
}
void Hash::linprob(int roll,int num)
{int key;
key=hashkey(roll);
	int flag,i,count=0;
	flag=0;
	if(rec[key].rollno==-1)
	{
	rec[key].rollno=roll;
	rec[key].marks=num;
}
	else
		{
		i=0;
		while(i<9)
		{
			if(rec[i].rollno!=-1)
			count++;
			i++;

		}
		if(count==9)
		{
			cout<<"hash table full";
			display(rec);
		}
		for(i=key+1;i<9;i++)
		if(rec[i].rollno==-1)
	{
	rec[i].rollno=roll;
	rec[i].marks=num;
		flag=1;
		break;
	}for(i=0;i<key&&flag==0;i++)
	{
	if(rec[i].rollno==-1)
	{
	rec[i].rollno=roll;
	rec[i].marks=num;
	flag=1;
	break;
	}
	}
}

}

int Hash::search(int no)
{
	int key,flag =0,i=0,pos=0;
	key = hashkey(no);

	if(rec[key].rollno==no)
	{
		flag = 1;
		pos=key;

	}

	else
	{
		for( i=key+1;i<10;i++)
		{
			if(rec[i].rollno==no)
			{
				flag = 1;
				pos=i-1;
				break;
			}

		}
				for( i=0;i<key;i++)
				{
					if(rec[i].rollno==no)
					{
						flag = 1;
						pos=i;
						break;
					}
				}


		}

		if(flag == 1)
		{
			cout<<"Record Present \n";
			return pos;
		}
		else
		{
			cout<<"Record Not Present \n";
			return -99;
		}

}
void Hash::displayhash()
{
	display(rec);
}
int main()
 {
   int rollno,ans,recno,op,marks;

   Hash h;

   do
     { cout<<"\n\n1)Print\n2)Insert\n3)Search\n";

       cout<<"\nEnter Your Choice:";
       cin>>op;
       switch(op)
	{
		case 1: h.displayhash();break;
	  	case 2: cout<<"\nEnter a record to be inserted(roll no,name,marks) : ";
		 		cin>>rollno>>marks;

		 		h.linprob(rollno,marks);
		  		break;
	  	case 3: cout<<"\nEnter the roll no. to be searched :";
		  		cin>>rollno;
		  		h.search(rollno);
		  		break;


     }cout<<"Do U Want To Continue [1/0]:      ";
     cin>>ans;
	 }while(ans==1);
 }