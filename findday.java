import java.util.Calendar;

    public static String findDay(int month, int day, int year) {
        
        Calendar cal = Calendar.getInstance();

        cal.set(year,month-1, day);

        int dayNumber = cal.get(Calendar.DAY_OF_WEEK);

        String  answer = "SATURDAY";
        System.out.println(cal.getTime());
        if(dayNumber == 1){answer = "SUNDAY";}
        if(dayNumber == 2){answer = "MONDAY";}
        if(dayNumber == 3){answer = "TUESDAY";}
        if(dayNumber == 4) {answer = "WEDNESDAY";}
        if(dayNumber == 5){answer = "THURSDAY";}
        if(dayNumber == 6){answer = "FRIDAY";}
        return answer;
    }