puts 'Start seeding'
puts 'Deleting old data'
puts 'Creating new seeds'

['Legs', 'Upper Body', 'Abs', 'Core', 'Arms']
legs = ExerciseGroup.create(name: 'Legs')
upper_body = ExerciseGroup.create(name: 'Upper Body')
abs = ExerciseGroup.create(name: 'Abs')
core = ExerciseGroup.create(name: 'Core')
endurance = ExerciseGroup.create(name: 'Endurance')

jl = Exercise.create(name: 'Jumping Lunges')
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: jl.id)

fl = Exercise.create(name: 'Forward Lunges')
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: fl.id)

bl = Exercise.create(name: 'Backward Lunges')
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: bl.id)

bls = Exercise.create(name: 'Backward Lunges - sideways')
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: bls.id)

blk = Exercise.create(name: 'Backward Lunges - knee raises')
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: blk.id)

s = Exercise.create(name: 'Squats')
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: s.id)

ss = Exercise.create(name: 'Sumo Squats')
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: ss.id)

ssq = Exercise.create(name: 'Side Squats')
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: ssq.id)

js = Exercise.create(name: 'Jump Squats')
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: js.id)
ExerciseGroupLink.create(exercise_group_id: endurance.id, exercise_id: js.id)

bs = Exercise.create(name: 'Bouncing Squats')
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: bs.id)

jj = Exercise.create(name: 'Jumping Jacks')
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: jj.id)
ExerciseGroupLink.create(exercise_group_id: endurance.id, exercise_id: jj.id)

hk = Exercise.create(name: 'High Knees')
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: hk.id)
ExerciseGroupLink.create(exercise_group_id: endurance.id, exercise_id: hk.id)

mc = Exercise.create(name: 'Mountain Climbers')
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: mc.id)
ExerciseGroupLink.create(exercise_group_id: endurance.id, exercise_id: mc.id)
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: mc.id)

jc = Exercise.create(name: 'Jumping Climbers')
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: jc.id)
ExerciseGroupLink.create(exercise_group_id: endurance.id, exercise_id: jc.id)
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: jc.id)

hp = Exercise.create(name: 'High Plank')
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: hp.id)

hpke = Exercise.create(name: 'High Plank - knees to elbows')
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: hpke.id)

hpstslo = Exercise.create(name: 'High Plank - side to side leg out')
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: hpstslo.id)

hpstsbtg = Exercise.create(name: 'High Plank - side to side booty to ground')
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: hpstsbtg.id)

p = Exercise.create(name: 'Plank')
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: p.id)

ps = Exercise.create(name: 'Plank Switches')
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: ps.id)

pke = Exercise.create(name: 'Plank - knees to elbows')
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: pke.id)

pstslo = Exercise.create(name: 'Plank - side to side leg out')
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: pstslo.id)

plj = Exercise.create(name: 'Plank - leg jacks')
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: plj.id)

sp = Exercise.create(name: 'Side-Plank ')
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: sp.id)

splr = Exercise.create(name: 'Side-Plank - leg raises')
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: splr.id)

spbtg = Exercise.create(name: 'Side-Plank - booty to ground')
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: spbtg.id)

b = Exercise.create(name: 'Burpees')
ExerciseGroupLink.create(exercise_group_id: endurance.id, exercise_id: b.id)
ExerciseGroupLink.create(exercise_group_id: legs.id, exercise_id: b.id)
ExerciseGroupLink.create(exercise_group_id: upper_body.id, exercise_id: b.id)
ExerciseGroupLink.create(exercise_group_id: core.id, exercise_id: b.id)

pu = Exercise.create(name: 'Push-up')
ExerciseGroupLink.create(exercise_group_id: upper_body.id, exercise_id: pu.id)

dpu = Exercise.create(name: 'Diamond Push-up')
ExerciseGroupLink.create(exercise_group_id: upper_body.id, exercise_id: dpu.id)

ppu = Exercise.create(name: 'Planche Push-up')
ExerciseGroupLink.create(exercise_group_id: upper_body.id, exercise_id: ppu.id)

pusts = Exercise.create(name: 'Push-up - side to side')
ExerciseGroupLink.create(exercise_group_id: upper_body.id, exercise_id: pusts.id)

puj = Exercise.create(name: 'Push-up Jumps')
ExerciseGroupLink.create(exercise_group_id: upper_body.id, exercise_id: puj.id)

puc = Exercise.create(name: 'Push-up Claps')
ExerciseGroupLink.create(exercise_group_id: upper_body.id, exercise_id: puc.id)

su = Exercise.create(name: 'Sit-ups')
ExerciseGroupLink.create(exercise_group_id: abs.id, exercise_id: su.id)

lr = Exercise.create(name: 'Leg Raises')
ExerciseGroupLink.create(exercise_group_id: abs.id, exercise_id: lr.id)

ht = Exercise.create(name: 'Heel Touches')
ExerciseGroupLink.create(exercise_group_id: abs.id, exercise_id: ht.id)

sc = Exercise.create(name: 'Scissors')
ExerciseGroupLink.create(exercise_group_id: abs.id, exercise_id: sc.id)

rt = Exercise.create(name: 'Russian Twit')
ExerciseGroupLink.create(exercise_group_id: abs.id, exercise_id: rt.id)

hh = Exercise.create(name: 'Hollow Hold')
ExerciseGroupLink.create(exercise_group_id: abs.id, exercise_id: hh.id)

bc = Exercise.create(name: 'Bicycle Crunches')
ExerciseGroupLink.create(exercise_group_id: abs.id, exercise_id: bc.id)

wp = Exercise.create(name: 'Wipers')
ExerciseGroupLink.create(exercise_group_id: abs.id, exercise_id: wp.id)

puts 'Seeding done, have nice day'
