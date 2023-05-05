# // # Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt
# // # Open the **Terminal app**


# // # Create a new directory on your desktop called `galaxy_far_far_away`and enter it
# ////////////ANSWER////////////
# // # cd ~/Desktop
# // # mkdir galaxy_far_far_away


# // # Create a directory called `death_star`
# ////////////ANSWER////////////
# // # cd galaxy_far_far_away
# // # mkdir death_star


# // # and make the following files inside of it:
# // # darth_vader.txt
# // # princess_leia.txt
# // # storm_trooper.txt
# ////////////ANSWER////////////
# // # cd death_star
# // # touch darth_vader.txt princess_leia.txt storm_trooper.txt


# // # In `galaxy_far_far_away`, make a directory named `tatooine`
# ////////////ANSWER////////////
# // # cd .. 
# // # mkdir tatooine


# // # and create the following files in it:
# // # luke.txt
# // # ben_kenobi.txt
# ////////////ANSWER////////////
# // # cd tatooine
# // # touch luke.txt ben_kenobi.txt


# // # Inside of `tatooine` make a directory called `millenium_falcon`
# // # and in it create:
# // # cd tatooine
# // # mkdir millenium_falcon
# // # han_solo.txt
# // # chewbaca.txt
# ////////////ANSWER////////////
# // # cd ..
# // # mkdir millenium_falcon
# // # cd millenium_falcon
# // # touch han_solo.txt chewbaca.txt


# // # Rename `ben_kenobi.txt` to `obi_wan.txt
# ////////////ANSWER////////////
# // # cd ..
# // # mv ben_kenobi.txt obi_wan.txt


# // # Copy `storm_trooper.txt` from `death_star` to `tatooine`
# ////////////ANSWER////////////
# // # cd ..
# // # cp death_star 
# // # cd storm_trooper.txt ../tatooine

# So long as you are in the death_star directory with the strom_tropper.txt file you can run the following
cp storm_trooper.txt ../tatooine


# // # Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`
# ////////////ANSWER////////////
# // # cd tatooine
# // # cp luke.txt obi_wan.txt millenium_falcon

# instead of cp you would want to use mv 
mv luke.txt ./millenium_falcon
mv obi_wan.txt ./millenium_falcon

# // # Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`
# ////////////ANSWER////////////
# // # cd galaxy_far_far_away
# // # cd millenium_falcon galaxy_far_far_away

# to move the millenium_falcon use the mv command
mv millenium_falcon ../galaxy_far_far_away

# // # Move `millenium_falcon` into `death_star`
# ////////////ANSWER////////////
# // # cd galaxy_far_far_away
# // # mv millenium_falcon death_star


# // # Move `princess_leia.txt` into the `millenium_falcon`
# # ////////////ANSWER////////////
# cd death_star
# mv princess_leia.txt millenium_falcon


# # // # Delete `obi_wan.txt`
# # ////////////ANSWER////////////
# cd death_star
# cd millenium_falcon
# rm obi_wan.txt


# # // # In `galaxy_far_far_away`, make a directory called `yavin_4`
# # ////////////ANSWER////////////
# run cd .. twice to get to galaxy_far_far_away
# mkdir yavin_4


# # // # Move the `millenium_falcon` out of the `death_star` and into `yavin_4`
# # ////////////ANSWER////////////
# cd death_star
# mv millenium_falcon yavin_4


# // # Make a directory in `yavin_4` called `x_wing`
# ////////////ANSWER////////////
# cd yavin_4
# mkdir x_wing

# // # Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`
# ////////////ANSWER////////////
# cd into yavin_4
# cd princess_leia.txt x_wing 

# // # Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`
# ////////////ANSWER////////////
# cd into galaxy_far_far_away
# cd millenium_falcon /x_wing  <-- mv command 
mv millenium_falcon ../galaxy_far_far_away
mv x_wing ../galaxy_far_far_away

# // # In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`
# ////////////ANSWER////////////
# cd death_star
# mkdir tie_fighter1 tie_fighter2

# // # Move `darth_vader.txt` into `tie_fighter_1`
# ////////////ANSWER////////////
# // mv darth_vader.txt tie_fighter_1


# // # Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`
# ////////////ANSWER////////////
# // cd into death_star
# cp storm_trooper.txt tie_fighter_2    
# cp storm_trooper.txt tie_fighter_3 

# // # Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`
# ////////////ANSWER////////////
# cd into death_star 
mv tie_fighter_1 ../galaxy_far_far_away
mv tie_fighter_2 ../galaxy_far_far_away
mv tie_fighter_3 ../galaxy_far_far_away

# // # Be careful with this command - cannot undo!
# // # Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

# // # This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete

# // # Remove `tie_fighters` 2 and 3.
# ////////////ANSWER////////////
# rm -r tie_fighter_2 tie_fighter_3

# // # Touch a file in "**x_wing**" called "**the_force.txt**".
# ////////////ANSWER////////////
# cd into x_wing
# touch the_force.txt

# // # Destroy the "**death_star**" and anyone inside of it.
# ////////////ANSWER////////////
# cd into death_star
# rm death_star

# // # Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
# ////////////ANSWER////////////
# mv x_wing millenium_falcon yavin_4


# // # Celebrate!

# I spent a lot of time on differentiating on mv for renaming or mv for moving a txt file into a directory. I went to the office hours and was able to execute it once, but not after that. I had lots of difficulty with this one. 

# In Bash to comment you will use the # sign, hope my notes help great work!
