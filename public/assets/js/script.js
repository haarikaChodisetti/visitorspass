function standardPeriod(p) {
				var CurrentDate = new Date();
				CurrentDate.setMonth(CurrentDate.getMonth() + p);
				
				var day = CurrentDate.getDate();
				var month = CurrentDate.getMonth()+1;
				var year = CurrentDate.getFullYear();
				
				if (month < 10)
					month = "0" + month;
				if (day < 10)
					day = "0" + day;
				
				var today = year + "-" + month + "-" + day;
				
				return today;
}
/*  jQuery ready function. Specify a function to execute when the DOM is fully loaded.  */
$(document).ready(
  /* This is the function that will get executed after the DOM is fully loaded */
  function () {
			$('#vdate').val(standardPeriod);
		
  }
);