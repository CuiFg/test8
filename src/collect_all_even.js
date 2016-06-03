'use strict';

function collect_all_even(collection)
{

	var shuZu=[];
	for(var i=0; i<collection.length; i++)
	{
		if(collection[i]%2==0)
		{
			shuZu.push(collection[i]);
		}
	}
	return shuZu;
}

module.exports = collect_all_even;
